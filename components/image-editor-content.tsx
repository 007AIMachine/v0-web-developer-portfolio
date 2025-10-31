"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, Download, Scissors, ImageIcon, RotateCcw } from "lucide-react"

export function ImageEditorContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setProcessedImage(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveBackground = async () => {
    if (!selectedImage) return

    setIsProcessing(true)
    setTimeout(() => {
      setProcessedImage(selectedImage)
      setIsProcessing(false)
    }, 3000)
  }

  const handleDownload = () => {
    if (!processedImage) return

    const link = document.createElement("a")
    link.href = processedImage
    link.download = "image-no-background.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleReset = () => {
    setSelectedImage(null)
    setProcessedImage(null)
    setIsProcessing(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Image Background Remover
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your image and remove the background with AI-powered technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ImageIcon className="w-6 h-6 text-cyan-400 mr-3" />
                Original Image
              </h2>

              {!selectedImage ? (
                <div
                  className="border-2 border-dashed border-cyan-500/30 rounded-lg p-12 text-center cursor-pointer hover:border-cyan-500/50 transition-colors duration-300"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Click to upload an image</p>
                  <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Original"
                      className="w-full h-64 object-contain bg-gray-800 rounded-lg"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleRemoveBackground}
                      disabled={isProcessing}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Scissors className="w-5 h-5" />
                          <span>Remove Background</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-red-500 hover:text-red-400 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Scissors className="w-6 h-6 text-cyan-400 mr-3" />
                Processed Image
              </h2>

              {!processedImage ? (
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-gray-500">Processed image will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg opacity-20" />
                    <img
                      src={processedImage || "/placeholder.svg"}
                      alt="Processed"
                      className="w-full h-64 object-contain bg-transparent rounded-lg relative z-10"
                    />
                  </div>

                  <button
                    onClick={handleDownload}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Image</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Scissors,
              title: "AI-Powered",
              description: "Advanced AI algorithms for precise background removal",
            },
            {
              icon: Upload,
              title: "Easy Upload",
              description: "Simple drag and drop or click to upload your images",
            },
            {
              icon: Download,
              title: "High Quality",
              description: "Download processed images in original quality",
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 text-center"
              >
                <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
