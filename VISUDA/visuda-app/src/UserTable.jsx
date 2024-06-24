import React, { useState } from 'react';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Container } from '@mui/material';
import { Add, Search, Edit, Delete } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

let initialData = [
  { NIK: '00102392382833', nama: 'ADI', gender: 'L', usia: 54, pekerjaan: 'BURUH', alamat: 'Jl. Kebon Jeruk', status: 'Aktif' },
  { NIK: '12243553636774', nama: 'UNNA', gender: 'P', usia: 25, pekerjaan: 'IBU RUMAH TANGGA', alamat: 'Jl. Merdeka', status: 'Aktif' },
  { NIK: '43484754857488', nama: 'BUJANG', gender: 'L', usia: 40, pekerjaan: 'PETANI', alamat: 'Jl. Pahlawan', status: 'Non-Aktif' },
  { NIK: '00013484737838', nama: 'SAHWA', gender: 'P', usia: 20, pekerjaan: 'MAHASISWA', alamat: 'Jl. Sudirman', status: 'Aktif' },
  { NIK: '000000123456789', nama: 'ANDI', gender: 'L', usia: 30, pekerjaan: 'PNS', alamat: 'Jl. Gatot Subroto', status: 'Non-Aktif' },
  { NIK: '122233344546748', nama: 'RUDY', gender: 'L', usia: 21, pekerjaan: 'MAHASISWA', alamat: 'Jl. Diponegoro', status: 'Aktif' }
];

function UserTable() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({ NIK: '', nama: '', gender: '', usia: '', pekerjaan: '', alamat: '', status: '' });
  const [editIndex, setEditIndex] = useState(-1);
  const [ktpFile, setKtpFile] = useState(null);
  const [kkFile, setKkFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditIndex(-1);
    setKtpFile(null);
    setKkFile(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAdd = () => {
    if (editIndex >= 0) {
      const updatedData = [...data];
      updatedData[editIndex] = newData;
      setData(updatedData);
    } else {
      setData([...data, newData]);
    }
    setNewData({ NIK: '', nama: '', gender: '', usia: '', pekerjaan: '', alamat: '', status: '' });
    setOpen(false);
    setEditIndex(-1);
    setKtpFile(null);
    setKkFile(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewData(data[index]);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const onDropKtp = (acceptedFiles) => {
    setKtpFile(acceptedFiles[0]);
  };

  const onDropKk = (acceptedFiles) => {
    setKkFile(acceptedFiles[0]);
  };

  const { getRootProps: getRootPropsKtp, getInputProps: getInputPropsKtp } = useDropzone({ onDrop: onDropKtp });
  const { getRootProps: getRootPropsKk, getInputProps: getInputPropsKk } = useDropzone({ onDrop: onDropKk });

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
      <Box sx={{ width: '100%', marginTop: 4 }}> {/* Memberikan margin atas 4 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Data Warga</Typography>
          <Box display="flex" alignItems="center">
            <Paper component="form" className="search-bar" sx={{ display: 'flex', alignItems: 'center', maxWidth: 400, padding: '2px 4px', marginRight: '6px' }}>
              <input type="text" placeholder="Search" className="search-input" style={{ flexGrow: 1, padding: '6px' }} />
              <IconButton type="submit" className="search-icon" aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="contained" color="primary" startIcon={<Add />} sx={{ marginRight: 1 }} onClick={handleClickOpen}>
            Tambah
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell sx={{ color: 'white' }}>No</TableCell>
                <TableCell sx={{ color: 'white' }}>NIK</TableCell>
                <TableCell sx={{ color: 'white' }}>Nama Warga</TableCell>
                <TableCell sx={{ color: 'white' }}>L/P</TableCell>
                <TableCell sx={{ color: 'white' }}>Usia</TableCell>
                <TableCell sx={{ color: 'white' }}>Pekerjaan</TableCell>
                <TableCell sx={{ color: 'white' }}>Alamat</TableCell>
                <TableCell sx={{ color: 'white' }}>Status</TableCell>
                <TableCell sx={{ color: 'white' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.NIK} className="table-row">
                  <TableCell className="table-cell">{index + 1}</TableCell>
                  <TableCell className="table-cell">{row.NIK}</TableCell>
                  <TableCell className="table-cell">{row.nama}</TableCell>
                  <TableCell className="table-cell">{row.gender}</TableCell>
                  <TableCell className="table-cell">{row.usia}</TableCell>
                  <TableCell className="table-cell">{row.pekerjaan}</TableCell>
                  <TableCell className="table-cell">{row.alamat}</TableCell>
                  <TableCell className="table-cell">{row.status}</TableCell>
                  <TableCell className="table-cell">
                    <IconButton color="primary" onClick={() => handleEdit(index)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(index)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editIndex >= 0 ? 'Edit Data Warga' : 'Tambah Data Warga'}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="NIK"
                  label="NIK"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newData.NIK}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="nama"
                  label="Nama"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newData.nama}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="gender"
                  label="Gender"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newData.gender}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="usia"
                  label="Usia"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={newData.usia}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="pekerjaan"
                  label="Pekerjaan"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newData.pekerjaan}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  name="status"
                  label="Status"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newData.status}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="alamat"
                  label="Alamat"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newData.alamat}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Box {...getRootPropsKtp()} sx={{ border: '2px dashed grey', padding: 2, textAlign: 'center', mt: 2 }}>
                  <input {...getInputPropsKtp()} />
                  <Typography variant="body2">Drag & drop KTP here, or click to select file</Typography>
                  {ktpFile && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      File KTP: {ktpFile.name}
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box {...getRootPropsKk()} sx={{ border: '2px dashed grey', padding: 2, textAlign: 'center', mt: 2 }}>
                  <input {...getInputPropsKk()} />
                  <Typography variant="body2">Drag & drop KK here, or click to select file</Typography>
                  {kkFile && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      File KK: {kkFile.name}
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAdd} color="primary">
              {editIndex >= 0 ? 'Update' : 'Submit'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default UserTable;
