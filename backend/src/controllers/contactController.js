import Contact from '../models/Contact.js';

// Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};

// Create new contact
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    
    // Check if email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      jobTitle
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: 'Error creating contact', error: error.message });
  }
};

// Update contact
export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

    // Check if email exists for another contact
    const existingContact = await Contact.findOne({ email, _id: { $ne: id } });
    if (existingContact) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        jobTitle
      },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: 'Error updating contact', error: error.message });
  }
};

// Delete contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting contact', error: error.message });
  }
};