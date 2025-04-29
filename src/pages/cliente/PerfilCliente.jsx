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
  Divider
} from "@mui/material";

const PerfilCliente = () => {

  const [perfil, setPerfil] = useState({
    nombre: "Juan Pérez",
    email: "juanperez@email.com",
    telefono: "+56 9 1234 5678",
    direccion: "Av. Siempre Viva 742, Santiago"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Perfil actualizado:", perfil);
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Mi perfil
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <Avatar
                alt="Perfil"
                src="https://via.placeholder.com/100"
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Typography variant="h6">{perfil.nombre}</Typography>
              <Typography color="text.secondary">Cliente registrado</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Información personal
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Dirección"
                      name="direccion"
                      value={perfil.direccion}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="contained" type="submit" color="primary">
                    Guardar cambios
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default PerfilCliente;