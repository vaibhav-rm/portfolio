"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ArrowLeft, Play, Copy, Check } from "lucide-react"

const codeExamples = [
  {
    id: 1,
    title: "Binary Search Algorithm",
    language: "javascript",
    code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// Usage
const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7)); // Output: 3`,
    output: "3",
    description: "Efficient search algorithm with O(log n) time complexity",
  },
  {
    id: 2,
    title: "Fibonacci Sequence with Memoization",
    language: "javascript",
    code: `function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Calculate Fibonacci numbers
for (let i = 0; i <= 10; i++) {
  console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}`,
    output: `F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
F(10) = 55`,
    description: "Optimized recursive solution using memoization",
  },
  {
    id: 3,
    title: "Array Sorting Algorithms",
    language: "javascript",
    code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort([...unsorted])); // Output: [11, 12, 22, 25, 34, 64, 90]`,
    output: "[11, 12, 22, 25, 34, 64, 90]",
    description: "Classic bubble sort implementation",
  },
]

export default function PlaygroundPage() {
  const [copied, setCopied] = useState<number | null>(null)
  const [executed, setExecuted] = useState<number | null>(null)

  const handleCopy = (id: number, code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleExecute = (id: number) => {
    setExecuted(id)
    setTimeout(() => setExecuted(null), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground smooth-transition"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold">Code Playground</h1>
              <p className="text-lg text-foreground/60 max-w-2xl">
                Interactive code examples and algorithms showcasing different programming concepts and solutions.
              </p>
            </div>
          </motion.div>

          {/* Code Examples */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {codeExamples.map((example) => (
              <motion.div key={example.id} variants={itemVariants} className="glass-card overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-border space-y-2">
                  <h2 className="text-2xl font-bold">{example.title}</h2>
                  <p className="text-foreground/70">{example.description}</p>
                </div>

                {/* Code Section */}
                <div className="space-y-4 p-6 bg-background/50">
                  {/* Language Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-mono">
                      {example.language}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleExecute(example.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 smooth-transition"
                      >
                        <Play size={16} />
                        {executed === example.id ? "Executed" : "Run"}
                      </button>
                      <button
                        onClick={() => handleCopy(example.id, example.code)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted smooth-transition"
                      >
                        {copied === example.id ? (
                          <>
                            <Check size={16} className="text-green-500" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Code Block */}
                  <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-slate-100 font-mono leading-relaxed">{example.code}</code>
                  </pre>
                </div>

                {/* Output Section */}
                <div className="p-6 border-t border-border space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground/60">Output</h4>
                  <pre className="bg-background rounded-lg p-4 border border-border text-sm text-green-400 font-mono">
                    {example.output}
                  </pre>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-foreground/60 mb-6">More interactive examples coming soon. Start exploring!</p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
