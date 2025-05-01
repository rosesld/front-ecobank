import { useState } from 'react';
import vendedorService from '../../services/vendedorService';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const FormularioVendedor = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    password: '',
    telefono: '',
    rutPyme: '',
    razonSocial: '',
    nombrePyme: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí llamamos al servicio para crear el vendedor
      await vendedorService.crearVendedor(formData);
      alert('Vendedor creado exitosamente');
      setFormData({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        password: '',
        telefono: '',
        rutPyme: '',
        razonSocial: '',
        nombrePyme: ''
      });
    } catch (err) {
      console.error('Error al crear vendedor:', err);
      alert('Hubo un error al registrar al vendedor');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Formulario de Vendedor
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Apellido Paterno"
              variant="outlined"
              fullWidth
              required
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Apellido Materno"
              variant="outlined"
              fullWidth
              required
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Contraseña"
              variant="outlined"
              fullWidth
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Teléfono"
              variant="outlined"
              fullWidth
              required
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="RUT Pyme"
              variant="outlined"
              fullWidth
              required
              name="rutPyme"
              value={formData.rutPyme}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Razón Social"
              variant="outlined"
              fullWidth
              required
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre de la Pyme"
              variant="outlined"
              fullWidth
              required
              name="nombrePyme"
              value={formData.nombrePyme}
              onChange={handleChange}
            />
          </Grid>

          {/* Este Grid es para el botón debajo de todos los campos */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '10px', fontSize: '16px' }}
            >
              Registrar como Vendedor
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FormularioVendedor;
