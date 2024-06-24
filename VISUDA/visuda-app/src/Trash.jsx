import React, { useState } from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Trash = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { no: 1, kategori: 'Surat Pengantar RT/RW', nama: 'Tonikum', data: 'Lihat Data', status: 'Dihapus', details: { NIK: '000000123456789', tempatTanggalLahir: 'Surabaya/15 Mei 1988', pekerjaan: 'Wirausaha', jenisKelamin: 'Perempuan', agama: 'Islam', status: 'Nikah', wilayahRTRW: '004/005', nomorHandphone: '081234567890' } },
    { no: 2, kategori: 'Surat Keterangan Tidak Mampu', nama: 'Bapak Ande', data: 'Lihat Data', status: 'Dihapus', details: { NIK: '000000987654321', tempatTanggalLahir: 'Jakarta/20 Juni 1985', pekerjaan: 'Buruh', jenisKelamin: 'Laki-laki', agama: 'Kristen', status: 'Lajang', wilayahRTRW: '003/004', nomorHandphone: '081987654321' } },
  ]);

  const handleRestoreClick = (row) => {
    const updatedData = data.map((item) =>
      item.no === row.no ? { ...item, status: 'Verifikasi' } : item
    );
    setData(updatedData);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* Page title */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Data Dihapus</Typography>

      {/* Search box next to title */}
      <Box
      mb={4} // Margin bottom 4 (adjust as needed)
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', // Menempatkan ke kanan layar
        maxWidth: 400, // Lebar maksimum box
      }}
    >
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

      {/* Table to display deleted requests */}
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
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f0f0f0', // Ubah warna latar belakang baris
                  '&:hover': { backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }, // Ubah warna latar belakang saat hover
                }}
              >
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.kategori}</TableCell>
                <TableCell>{row.nama}</TableCell>
                <TableCell>
                  <Button onClick={() => console.log('Lihat Data')} color="primary" variant="outlined">
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
                      color: '#fff',
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleRestoreClick(row)} color="primary" variant="outlined">
                    Pulihkan
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Trash;
