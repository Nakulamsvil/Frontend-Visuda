import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function SuratKeteranganUsaha() {
  const [formData, setFormData] = useState({
    nomorSurat: '',
    nama: '',
    tempatTanggalLahir: '',
    noKTP: '',
    agama: '',
    pekerjaan: '',
    alamat: '',
    keperluan: '',
    tanggal: '',
    kepalaDesa: ''
  });

  const [openPrintDialog, setOpenPrintDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !formData.nomorSurat ||
      !formData.nama ||
      !formData.tempatTanggalLahir ||
      !formData.noKTP ||
      !formData.agama ||
      !formData.pekerjaan ||
      !formData.alamat ||
      !formData.keperluan ||
      !formData.tanggal ||
      !formData.kepalaDesa
    ) {
      alert('Mohon lengkapi semua kolom');
      return;
    }

    try {
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

      console.log('Data berhasil dikirim');
      setOpenPrintDialog(true); // Buka dialog cetak surat setelah berhasil
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
      alert('Terjadi kesalahan saat mengirimkan data');
    }
  };

  const handleClosePrintDialog = () => {
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
          SURAT KETERANGAN USAHA
        </Typography>
        <Typography variant="body1" mb={2} align="center">
          {formData.nomorSurat}
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
              <strong>Perihal: Permohonan Surat Keterangan Usaha</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Dengan ini saya yang bertanda tangan di bawah ini:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tempat/Tanggal Lahir"
              name="tempatTanggalLahir"
              value={formData.tempatTanggalLahir}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="No. KTP"
              name="noKTP"
              value={formData.noKTP}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Agama"
              name="agama"
              value={formData.agama}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Keperluan"
              name="keperluan"
              value={formData.keperluan}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tanggal"
              name="tanggal"
              type="date"
              value={formData.tanggal}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Kepala Desa"
              name="kepalaDesa"
              value={formData.kepalaDesa}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Typography variant="body1" mt={2}>
          Demikianlah surat keterangan ini dibuat untuk dipergunakan sebagaimana mestinya.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSubmit} mt={2}>
          Buat Surat
        </Button>
      </Box>

      {/* Dialog untuk cetak surat */}
      <Dialog open={openPrintDialog} onClose={handleClosePrintDialog}>
        <DialogTitle>Cetak Surat Keterangan Usaha</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
            Isi surat keterangan usaha yang ingin dicetak...
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePrintDialog} color="primary">
            Tutup
          </Button>
          <Button color="primary">
            Cetak
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default SuratKeteranganUsaha;
