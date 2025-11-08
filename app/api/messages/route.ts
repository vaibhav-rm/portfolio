import { writeFile, readFile } from "fs/promises"
import { join } from "path"
import { type NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-static'
const messagesFile = join(process.cwd(), "public", "messages.json")

interface Message {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
  read: boolean
}

async function getMessages(): Promise<Message[]> {
  try {
    const data = await readFile(messagesFile, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveMessages(messages: Message[]): Promise<void> {
  await writeFile(messagesFile, JSON.stringify(messages, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const messages = await getMessages()
    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      read: false,
    }

    messages.push(newMessage)
    await saveMessages(messages)

    return NextResponse.json({ success: true, message: "Message saved successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const messages = await getMessages()
    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error reading messages:", error)
    return NextResponse.json({ error: "Failed to read messages" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing message ID" }, { status: 400 })
    }

    let messages = await getMessages()
    messages = messages.filter((msg) => msg.id !== id)
    await saveMessages(messages)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting message:", error)
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing message ID" }, { status: 400 })
    }

    const messages = await getMessages()
    const messageIndex = messages.findIndex((msg) => msg.id === id)

    if (messageIndex === -1) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    messages[messageIndex].read = !messages[messageIndex].read
    await saveMessages(messages)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating message:", error)
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 })
  }
}
