import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="feedback"
              placeholder="Your feedback"
              value={form.feedback}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {submitted && (
        <Card>
          <CardHeader>
            <CardTitle>Submitted Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Feedback:</strong> {submitted.feedback}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
