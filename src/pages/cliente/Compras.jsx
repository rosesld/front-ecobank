import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const purchases = [
  {
    id: "44778481",
    date: "Sábado 14 de Septiembre, 2024",
    address: "Santiago, Región Metropolitana, Chile",
    total: "$11.130",
    subtotal: "$8.240",
    shipping: "$2.890",
    status: "En camino",
    products: [
      {
        name: "Peluche de lana hecho a mano",
        description: "Amigurumi confeccionado con lana de alpaca peruana",
        vendor: "Tienda doña turuleca",
        image: "https://via.placeholder.com/100x100.png?text=Peluche",
      },
      {
        name: "Mochila hecha mano",
        description: "Mochila hecha a mano con telas cuero natural",
        vendor: "Tienda Patrones naturales",
        image: "https://via.placeholder.com/100x100.png?text=Mochila",
      },
    ],
  },
  {
    id: "44778482",
    date: "Domingo 15 de Octubre, 2024",
    address: "Valparaíso, Región de Valparaíso, Chile",
    total: "$7.560",
    subtotal: "$5.000",
    shipping: "$2.560",
    status: "Entregado",
    products: [
      {
        name: "Collar artesanal",
        description: "Collar hecho a mano con piedras naturales",
        vendor: "Tienda Joyas del Mar",
        image: "https://via.placeholder.com/100x100.png?text=Collar",
      },
    ],
  },
];


const Compras = () => {
  return (
    <Card sx={{ maxWidth: 900, margin: "auto", p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Mis compras
        </Typography>
        {purchases.map((purchase) => (
          <Accordion key={purchase.id} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Pedido #{purchase.id} - {purchase.total} - {purchase.status}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" gutterBottom>
                <strong>Fecha:</strong> {purchase.date}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Dirección:</strong> {purchase.address}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Total:</strong> {purchase.total} (Productos {purchase.subtotal} + Envío {purchase.shipping})
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 1, mb: 2 }}>
                Ver boleta asociada
              </Button>
              <Grid container spacing={2}>
                {purchase.products.map((product, index) => (
                  <Grid item xs={12} key={index}>
                    <Box display="flex" gap={2} alignItems="flex-start">
                      <Avatar
                        src={product.image}
                        variant="rounded"
                        sx={{ width: 80, height: 80 }}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Typography variant="body2" fontWeight="bold">
                          Vendido por: {product.vendor}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}

export default Compras