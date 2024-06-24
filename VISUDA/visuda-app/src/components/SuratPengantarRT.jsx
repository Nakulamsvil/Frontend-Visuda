import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

function SuratPengantarRT() {
  const [formData, setFormData] = useState({
    nomorSurat: '',
    name: '',
    address: '',
    purpose: '',
  });

  const [openPrintDialog, setOpenPrintDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (!formData.nomorSurat || !formData.name || !formData.address || !formData.purpose) {
        throw new Error('Mohon lengkapi semua kolom');
      }

      // Kirim data formulir ke server menggunakan fetch atau axios
      const response = await fetch('url_ke_endpoint_backend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal mengirimkan data');
      }

      // Setelah data berhasil dikirim, buka dialog cetak
      setOpenPrintDialog(true);

      // Bersihkan formulir
      setFormData({
        nomorSurat: '',
        name: '',
        address: '',
        purpose: '',
      });

    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
      alert('Terjadi kesalahan saat mengirimkan data');
    }
  };

  const handlePrintClose = () => {
    setOpenPrintDialog(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#f0f0f0',
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Box p={3}>
        <Typography variant="h6" mb={2} align="center">
          PEMERINTAH KOTA BATAM<br />
          Komplek Perumahan Villa Hang Lekir<br />
        </Typography>
        <Typography variant="h4" mb={2} align="center">
          SURAT PENGANTAR RT/RW
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nomor Surat"
              name="nomorSurat"
              value={formData.nomorSurat}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Kepada Yth. Ketua RT/RW,</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Di Tempat</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Perihal: Permohonan Surat Pengantar</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Dengan ini saya yang bertanda tangan di bawah ini:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nama"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alamat"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Keperluan"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Demikian permohonan ini saya buat dengan sebenarnya dan apabila dikemudian hari ternyata terdapat ketidakbenaran pada data yang saya berikan, saya bersedia menerima sanksi yang berlaku.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Hormat saya,
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Buat Surat
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Dialog untuk tampilan cetak */}
      <Dialog open={openPrintDialog} onClose={handlePrintClose}>
        <DialogTitle>Preview Surat Pengantar RT/RW</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Contoh Surat Pengantar</Typography>
          <Typography variant="body1">
            Nomor Surat: {formData.nomorSurat}
          </Typography>
          <Typography variant="body1">
            Kepada Yth. Ketua RT/RW,
          </Typography>
          {/* Isi surat lainnya sesuai kebutuhan */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => window.print()} color="primary">
            Cetak Surat
          </Button>
          <Button onClick={handlePrintClose} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default SuratPengantarRT;
