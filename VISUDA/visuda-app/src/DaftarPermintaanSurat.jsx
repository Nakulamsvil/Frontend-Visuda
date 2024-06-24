import React, { useState } from 'react';
import {
  Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Button, Dialog, DialogTitle, DialogActions, DialogContent, Typography,
  TextField, InputAdornment, Grid, DialogContentText
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const DaftarPermintaanSurat = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDataDialog, setOpenDataDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [data, setData] = useState([
    { no: 1, kategori: 'Surat Pengantar RT/RW', nama: 'Tonikum', data: 'Lihat Data', status: 'Verifikasi', details: { NIK: '000000123456789', tempatTanggalLahir: 'Surabaya/15 Mei 1988', pekerjaan: 'Wirausaha', jenisKelamin: 'Perempuan', agama: 'Islam', status: 'Nikah', wilayahRTRW: '004/005', nomorHandphone: '081234567890' } },
    { no: 2, kategori: 'Surat Keterangan Tidak Mampu', nama: 'Bapak Ande', data: 'Lihat Data', status: 'Verifikasi', details: { NIK: '000000987654321', tempatTanggalLahir: 'Jakarta/20 Juni 1985', pekerjaan: 'Buruh', jenisKelamin: 'Laki-laki', agama: 'Kristen', status: 'Lajang', wilayahRTRW: '003/004', nomorHandphone: '081987654321' } },
    { no: 3, kategori: 'Pembuatan Kartu Keluarga', nama: 'Bagas', data: 'Lihat Data', status: 'Verifikasi', details: { NIK: '000000123456789', tempatTanggalLahir: 'Bandung/5 April 1990', pekerjaan: 'Pegawai Negeri', jenisKelamin: 'Laki-laki', agama: 'Islam', status: 'Menikah', wilayahRTRW: '002/003', nomorHandphone: '081234567890' } },
    { no: 4, kategori: 'Surat Keterangan Usaha', nama: 'Answar', data: 'Lihat Data', status: 'Verifikasi', details: { NIK: '000000987654321', tempatTanggalLahir: 'Medan/10 Oktober 1978', pekerjaan: 'Pengusaha', jenisKelamin: 'Laki-laki', agama: 'Islam', status: 'Menikah', wilayahRTRW: '001/002', nomorHandphone: '081987654321' } }
  ]);

  const handleVerifikasiClick = (row) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseDataDialog = () => {
    setOpenDataDialog(false);
  };

  const handleTerimaSurat = () => {
    const updatedData = data.map((item) =>
      item.no === selectedRow.no ? { ...item, status: 'Buat' } : item
    );
    setData(updatedData);
    setSelectedRow({ ...selectedRow, status: 'Buat' });
    handleCloseDialog();
    navigate('/surat-pengantar-rt');
  };

  const handleTolakSurat = () => {
    console.log(`Surat ditolak untuk ${selectedRow.nama}`);
    handleCloseDialog();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLihatDataClick = (row) => {
    setSelectedRow(row);
    setOpenDataDialog(true);
  };

  const filteredData = data.filter((item) =>
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', backgroundColor: '#f0f0f0', paddingTop: 2, paddingBottom: 2 }}>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Verifikasi Surat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apakah Anda ingin menerima surat dari {selectedRow && selectedRow.nama}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTerimaSurat} color="primary">
            Terima
          </Button>
          <Button onClick={handleTolakSurat} color="secondary">
            Tolak
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDataDialog} onClose={handleCloseDataDialog} maxWidth="md" fullWidth>
        <DialogTitle>Kelengkapan Data</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nama"
                    value={selectedRow.nama}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="NIK"
                    value={selectedRow.details.NIK}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Tempat/Tanggal Lahir"
                    value={selectedRow.details.tempatTanggalLahir}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pekerjaan"
                    value={selectedRow.details.pekerjaan}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Jenis Kelamin"
                    value={selectedRow.details.jenisKelamin}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Status"
                    value={selectedRow.details.status}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Agama"
                    value={selectedRow.details.agama}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Wilayah RT/RW"
                    value={selectedRow.details.wilayahRTRW}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nomor Handphone"
                    value={selectedRow.details.nomorHandphone}
                    InputProps={{ readOnly: true }}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDataDialog} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h5">Data Permintaan Warga</Typography>
        <Box sx={{ maxWidth: 400 }}>
          <TextField
            variant="outlined"
            placeholder="Cari ..."
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#1A2869', color: '#ffffff' }}>No.</TableCell>
              <TableCell sx={{ backgroundColor: '#1A2869', color: '#ffffff' }}>Kategori</TableCell>
              <TableCell sx={{ backgroundColor: '#1A2869', color: '#ffffff' }}>Nama</TableCell>
              <TableCell sx={{ backgroundColor: '#1A2869', color: '#ffffff' }}>Data</TableCell>
              <TableCell sx={{ backgroundColor: '#1A2869', color: '#ffffff' }}>Status</TableCell>
              <TableCell sx={{ backgroundColor: '#1A2869', color: '#ffffff' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow
                key={row.no}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
                  '&:hover': { backgroundColor: '#e0e0e0' },
                }}
              >
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.kategori}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>
                  <Button onClick={() => handleLihatDataClick(row)} color="primary" variant="outlined">
                    Lihat Data
                  </Button>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: row.status === 'Verifikasi' ? '#ffeb3b' : '#4caf50',
                      color: '#000',
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell>
                  {row.status === 'Verifikasi' ? (
                    <Button onClick={() => handleVerifikasiClick(row)} color="primary" variant="outlined">
                      Verifikasi
                    </Button>
                  ) : (
                    <Button color="primary" variant="outlined" disabled>
                      Buat
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DaftarPermintaanSurat;
