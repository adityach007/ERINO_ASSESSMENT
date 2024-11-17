import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  jobTitle: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;