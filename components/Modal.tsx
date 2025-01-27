'use client'

import { useEffect, useRef, JSX } from 'react'
import { ArrowDown, X } from 'lucide-react'

type DiagramType = {
    type: string
    content: string | JSX.Element | Record<string, unknown> | Array<string>
}

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    title: string
    content: string
    diagram?: DiagramType
}

export function Modal({ isOpen, onClose, title, content, diagram }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    // Close modal when clicking outside or pressing 'Escape'
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick)
            document.addEventListener('keydown', handleEscKey)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    // Function to render different diagram types
    const renderDiagram = () => {
        if (!diagram) return null
        switch (diagram.type) {
            case 'flowchart':
                return (
                    <div className="mt-4 p-3 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                        <h5 className="font-semibold text-2xl text-gray-800 dark:text-white mb-6">Flowchart Diagram</h5>
                        <div>
                            {Array.isArray(diagram.content) ? (
                                diagram.content.map((step, index) => (
                                    <div key={index}>
                                        <div className="p-3 md:p-5 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 dark:from-blue-900 dark:via-gray-700 dark:to-blue-900 rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-600">
                                            <p className="text-gray-800 dark:text-white text-sm font-medium">{step}</p>
                                        </div>
                                        {Array.isArray(diagram.content) && index < diagram.content.length - 1 && (
                                            <div className="w-full flex justify-center">
                                                <ArrowDown className="text-gray-500 dark:text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 dark:text-gray-400 text-sm">No flowchart steps available</div>
                            )}
                        </div>
                    </div>
                )
            case 'comparison':
                return (
                    <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h5 className="font-semibold text-xl text-gray-800 dark:text-white mb-4">Comparison Diagram</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(diagram.content).map(([key, value]) => (
                                <div key={key} className="flex flex-col p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200">
                                    <strong className="text-lg font-medium text-gray-800 dark:text-white mb-2">{key}</strong>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'lifecycle':
                return (
                    <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                        <h5 className="font-semibold text-xl text-gray-800 dark:text-white mb-4">Lifecycle Diagram</h5>
                        <div className="relative">
                            {Array.isArray(diagram.content) && diagram.content.length > 0 ? (
                                diagram.content.map((step, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex items-center bg-blue-50 dark:bg-blue-900 p-3 rounded-md">
                                            <div className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-semibold">
                                                {index + 1}
                                            </div>
                                            <div className="ml-6 text-sm text-gray-800 dark:text-white">{step}</div>
                                        </div>
                                        {Array.isArray(diagram.content) && index < diagram.content.length - 1 && (
                                            <div className="w-full flex justify-center">
                                                <ArrowDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 dark:text-gray-400 text-sm">No lifecycle steps available</div>
                            )}
                        </div>
                    </div>
                )
            case 'mindmap':
                return (
                    <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                        <h5 className="font-semibold text-xl text-gray-800 dark:text-white mb-4">Mindmap Diagram</h5>
                        <ul className="list-inside">
                            {Array.isArray(diagram.content) && diagram.content.length > 0 ? (
                                diagram.content.map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-600 p-3 rounded-lg transition-all duration-300">
                                        <span className="mr-3 text-blue-500">&#8226;</span>
                                        {item}
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-500 dark:text-gray-400 text-sm">No mindmap items available</li>
                            )}
                        </ul>
                    </div>
                )
            case 'process':
                return (
                    <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
                        <h5 className="font-semibold text-2xl text-gray-800 dark:text-white mb-6">Process Diagram</h5>
                        <div className="space-y-6">
                            {Array.isArray(diagram.content) && diagram.content.length > 0 ? (
                                diagram.content.map((step, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-semibold transition-transform duration-300 transform hover:scale-110 cursor-pointer" aria-label={`Step ${index + 1}`}>
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{step}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 dark:text-gray-400 text-sm">No process steps available</div>
                            )}
                        </div>
                    </div>
                )
            case 'table':
                return (
                    <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h5 className="font-semibold text-xl text-gray-800 dark:text-white mb-4">Table</h5>
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto text-sm">
                                <thead>
                                    <tr className="bg-gray-200 dark:bg-gray-700">
                                        {Array.isArray(diagram.content) && diagram.content.length > 0 &&
                                            Object.keys(diagram.content[0]).map((key, index) => (
                                                <th key={index} className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                                            ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(diagram.content) && diagram.content.map((row, rowIndex) => (
                                        <tr key={rowIndex} className="border-t dark:border-gray-600">
                                            {Object.values(row).map((cell, cellIndex) => (
                                                <td key={cellIndex} className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            case 'concept':
                return (
                    <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h5 className="font-semibold text-xl text-gray-800 dark:text-white mb-4">Concept Diagram</h5>
                        <ul className="list-disc pl-6">
                            {Array.isArray(diagram.content) && diagram.content.length > 0 ? (
                                diagram.content.map((item, index) => (
                                    <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
                                ))
                            ) : (
                                <li className="text-gray-500 dark:text-gray-400 text-sm">No concept items available</li>
                            )}
                        </ul>
                    </div>
                )
            default:
                return (
                    <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                        <h5 className="font-semibold text-gray-800 dark:text-white">Diagram</h5>
                        <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                            {JSON.stringify(diagram.content, null, 2)}
                        </pre>
                    </div>
                )
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out" aria-labelledby="modal-title" role="dialog" aria-hidden={!isOpen}>
            <div ref={modalRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-auto p-6 transform transition-all duration-300 ease-in-out" style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">{title}</h2>
                    <button onClick={onClose} className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors p-2 rounded-full focus:outline-none" aria-label="Close modal">
                        <X size={24} />
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300 text-base">{content}</p>
                    {renderDiagram()}
                </div>
            </div>
        </div>
    )
}
