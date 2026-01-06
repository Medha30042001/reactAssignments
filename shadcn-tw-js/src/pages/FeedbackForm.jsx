import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const FeedbackForm = () => {

  const [form, setForm] = useState({
    nam:'',
    email:'',
    feedback:''
  });
  const [note, setNote] = useState(null)

  const handleChange = (e) => {
     const {name, value} = e.target;
     setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setNote(form);

    setForm({
      nam:'',
      email:'',
      feedback:''
    })
  };    

  return (
  
    <div class='max-w-md mx-auto mt-10 space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} class='space-y-4'>
            <Input type='text'
            name='nam'
            placeholder='Enter your Name'
            value={form.nam}
            onChange={handleChange}
            required />

            <Input type='email'
            name='email'
            placeholder='Enter your Email'
            value={form.email}
            onChange={handleChange}
            required />

            <Textarea
            name='feedback'
            placeholder='Give Feedback'
            value={form.feedback}
            onChange={handleChange}
            required />

            <Button type='submit'>Submit</Button>
          </form>
        </CardContent>
      </Card>
   
  
      {note && (
          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent class='space-y-2 text-sm px-7'>
              <p><strong>Name:</strong> {note.nam}</p>
              <p><strong>Email:</strong> {note.email}</p>
              <p><strong>Feedback:</strong> {note.feedback}</p>
            </CardContent>
          </Card>
      )}
       </div>

  )
}

export default FeedbackForm

