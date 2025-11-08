"use client"

import { useState, useEffect } from "react"
import { Trash2, Mail, Calendar, User, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface Message {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
  read: boolean
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all")

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/messages")
      const data = await response.json()
      setMessages(data.reverse())
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteMessage = async (id: string) => {
    try {
      await fetch(`/api/messages?id=${id}`, { method: "DELETE" })
      setMessages(messages.filter((msg) => msg.id !== id))
    } catch (error) {
      console.error("Error deleting message:", error)
    }
  }

  const toggleRead = async (id: string) => {
    try {
      await fetch(`/api/messages?id=${id}`, { method: "PATCH" })
      setMessages(messages.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg)))
    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  const filteredMessages = messages.filter((msg) => {
    if (filter === "unread") return !msg.read
    if (filter === "read") return msg.read
    return true
  })

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground/60">Loading messages...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Messages</h1>
            <p className="text-foreground/60">
              Total: {messages.length} | Unread: {messages.filter((m) => !m.read).length}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            {(["all", "unread", "read"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Messages List */}
          <div className="space-y-3">
            {filteredMessages.length === 0 ? (
              <div className="text-center py-12 text-foreground/60">No messages to display</div>
            ) : (
              filteredMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-lg border transition-colors ${
                    msg.read ? "border-border bg-background/50" : "border-primary/30 bg-primary/5"
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === msg.id ? null : msg.id)}
                    className="w-full p-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${msg.read ? "bg-foreground/30" : "bg-primary"}`} />
                          <h3 className="font-semibold truncate">{msg.name}</h3>
                          {!msg.read && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">New</span>
                          )}
                        </div>
                        <p className="text-sm text-foreground/60 truncate">{msg.email}</p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-foreground/40 transition-transform ${
                          expandedId === msg.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Message */}
                  {expandedId === msg.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-border px-4 py-4 space-y-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-foreground/70">
                          <User size={16} />
                          {msg.name}
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Mail size={16} />
                          {msg.email}
                        </div>
                        <div className="flex items-center gap-2 text-foreground/70 sm:col-span-2">
                          <Calendar size={16} />
                          {formatDate(msg.timestamp)}
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-3">
                        <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 border-t border-border">
                        <button
                          onClick={() => toggleRead(msg.id)}
                          className="px-3 py-1.5 text-sm bg-muted text-foreground rounded hover:bg-muted/80 transition-colors"
                        >
                          {msg.read ? "Mark as Unread" : "Mark as Read"}
                        </button>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="px-3 py-1.5 text-sm bg-destructive/10 text-destructive rounded hover:bg-destructive/20 transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
