import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductosHome from "../../components/ProductosHome";
import { useAuth } from '../../context/AuthContext'


const HomeCliente = () => {

  const { user, setUser } = useAuth();
  const partesNombre = user?.nombreCompleto?.split(" ");
  const nombreMostrado = `${partesNombre?.[0] ?? ""} ${partesNombre?.[1] ?? ""}`;
  
  

  return (
    <>
    <Box sx={{ bgcolor: "#A7B8D9", p: 4, borderRadius: 2, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton>
          <ArrowBackIosNewIcon sx={{ color: "#0D1D5C" }} />
        </IconButton>
        <Box textAlign="left">
          <Typography variant="h5" fontWeight="bold">
            Nos encanta verte de nuevo, {nombreMostrado}
          </Typography>
          <Typography variant="body1" mt={1}>
            Descubre las novedades y ofertas exclusivas para ti.
          </Typography>
        </Box>
        <Box>
          <Avatar
            alt="Perfil"
            src="https://via.placeholder.com/100"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
        </Box>
        <IconButton>
          <ArrowForwardIosIcon sx={{ color: "#0D1D5C" }} />
        </IconButton>
      </Box>
    </Box>

    <ProductosHome />
    </>
  );
};

export default HomeCliente;