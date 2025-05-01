import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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

  const navigate = useNavigate();

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

      navigate('/login'); 

    } catch (err) {
      console.error('Error al crear vendedor:', err);
      alert('Hubo un error al registrar al vendedor');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Formulario de Vendedor
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              fullWidth
              required
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido Paterno"
              fullWidth
              required
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido Materno"
              fullWidth
              required
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Teléfono"
              fullWidth
              required
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="RUT Pyme"
              fullWidth
              required
              name="rutPyme"
              value={formData.rutPyme}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Razón Social"
              fullWidth
              required
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nombre de la Pyme"
              fullWidth
              required
              name="nombrePyme"
              value={formData.nombrePyme}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '12px 0', fontSize: '16px' }}
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
