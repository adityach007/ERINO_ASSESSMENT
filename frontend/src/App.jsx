import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import DeleteConfirmDialog from './components/DeleteConfirmDialog';
import api from './services/api';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const data = await api.getContacts();
      setContacts(data);
    } catch (error) {
      toast.error('Failed to fetch contacts');
    }
  };

  const handleAddContact = async (contactData) => {
    try {
      await api.createContact(contactData);
      toast.success('Contact added successfully');
      fetchContacts();
    } catch (error) {
      toast.error(error.message || 'Failed to add contact');
    }
  };

  const handleUpdateContact = async (contactData) => {
    try {
      await api.updateContact(selectedContact._id, contactData);
      toast.success('Contact updated successfully');
      fetchContacts();
      setSelectedContact(null);
    } catch (error) {
      toast.error(error.message || 'Failed to update contact');
    }
  };

  const handleDeleteContact = async () => {
    try {
      await api.deleteContact(selectedContact._id);
      toast.success('Contact deleted successfully');
      fetchContacts();
      setIsDeleteDialogOpen(false);
      setSelectedContact(null);
    } catch (error) {
      toast.error(error.message || 'Failed to delete contact');
    }
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsFormOpen(true);
  };

  const handleDelete = (contact) => {
    setSelectedContact(contact);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedContact(null);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Management System
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setIsFormOpen(true)}
          sx={{ mb: 3 }}
        >
          Add New Contact
        </Button>

        <ContactTable 
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <ContactForm
          open={isFormOpen}
          handleClose={handleCloseForm}
          initialData={selectedContact}
          onSubmit={selectedContact ? handleUpdateContact : handleAddContact}
        />

        <DeleteConfirmDialog
          open={isDeleteDialogOpen}
          handleClose={() => setIsDeleteDialogOpen(false)}
          handleConfirm={handleDeleteContact}
          contactName={selectedContact ? `${selectedContact.firstName} ${selectedContact.lastName}` : ''}
        />

        <ToastContainer position="bottom-right" />
      </Box>
    </Container>
  );
}

export default App;