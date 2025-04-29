import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Divider,
  InputAdornment,
  useTheme
} from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const PerfilVendedor = () => {
  const [perfil, setPerfil] = useState({
    nombre: "Juan Pérez",
    email: "juanperez@empresa.com",
    telefono: "+56 9 1234 5678",
    direccion: "Av. Siempre Viva 742, Santiago",
    empresa: "Mi Empresa S.A.",
    rut: "76.543.210-9",
    razonSocial: "Comercializadora de Productos Diversos Limitada",
    descripcion: "Somos una empresa con más de 10 años de experiencia..."
  });

  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Perfil actualizado:", perfil);
  };

  return (
    <Box sx={{ 
      p: { xs: 2, md: 4 },
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Perfil del Vendedor
      </Typography>

      {/* Sección superior: Foto + Info */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* Foto de perfil */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              <Avatar
                alt="Foto perfil"
                src="https://via.placeholder.com/150"
                sx={{ 
                  width: 150, 
                  height: 150, 
                  mb: 2,
                  border: `4px solid ${theme.palette.primary.main}`
                }}
              />
              <Typography variant="h6" fontWeight="bold">
                {perfil.nombre}
              </Typography>
              <Typography color="text.secondary">
                Representante comercial
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Información personal */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Información Personal
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre completo"
                    name="nombre"
                    value={perfil.nombre}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={perfil.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="telefono"
                    value={perfil.telefono}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Dirección"
                    name="direccion"
                    value={perfil.direccion}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Descripción (full width) */}
      <Card sx={{ mb: 3, flex: 1 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Información de la Empresa
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre empresa"
                name="empresa"
                value={perfil.empresa}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="RUT empresa"
                name="rut"
                value={perfil.rut}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Razón social"
                name="razonSocial"
                value={perfil.razonSocial}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                name="descripcion"
                value={perfil.descripcion}
                onChange={handleChange}
                multiline
                rows={6}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Botón flotante abajo a la derecha */}
      <Box sx={{
        position: 'sticky',
        bottom: 20,
        display: 'flex',
        justifyContent: 'flex-end',
        mt: 2
      }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            boxShadow: 3
          }}
        >
          Guardar Cambios
        </Button>
      </Box>
    </Box>
  );
};

export default PerfilVendedor;