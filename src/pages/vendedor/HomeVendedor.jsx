import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  Container
} from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ProductosHome from '../../components/ProductosHome';

const salesData = [
  { name: "Ene", ventas: 4200 },
  { name: "Feb", ventas: 3800 },
  { name: "Mar", ventas: 5100 },
  { name: "Abr", ventas: 7200 },
  { name: "May", ventas: 6800 },
  { name: "Jun", ventas: 6500 },
  { name: "Jul", ventas: 7100 },
  { name: "Ago", ventas: 6900 },
  { name: "Sep", ventas: 7500 },
  { name: "Oct", ventas: 8200 },
  { name: "Nov", ventas: 7800 },
  { name: "Dic", ventas: 9500 }
];

const HomeVendedor = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
        Panel de control
      </Typography>

      {/* Sección de tarjetas informativas */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Productos activos
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                128
              </Typography>
              <Chip label="+12%" color="success" size="small" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Ventas mensuales
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                $1.2M
              </Typography>
              <Chip label="+8%" color="success" size="small" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Top productos
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                3
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.light' }}>1</Avatar>
                <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.light' }}>2</Avatar>
                <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.light' }}>3</Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Categorías
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                12
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                +2 nuevas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Sección del gráfico - Ocupa todo el ancho */}
      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h6" fontWeight="bold">
              Historial de ventas anual
            </Typography>
            {/* <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Vista</InputLabel>
              <Select value="anual" label="Vista">
                <MenuItem value="anual">Anual</MenuItem>
                <MenuItem value="trimestral">Trimestral</MenuItem>
                <MenuItem value="mensual">Mensual</MenuItem>
              </Select>
            </FormControl> */}
          </Box>

          <Box sx={{ width: '100%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: theme.palette.text.secondary }}
                  interval={0} // Muestra todos los meses
                />
                <YAxis 
                  tick={{ fill: theme.palette.text.secondary }}
                  tickFormatter={(value) => `$${(value / 1000)}k`}
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Ventas']}
                  labelFormatter={(label) => `Mes: ${label}`}
                />
                <Line
                  type="monotone"
                  dataKey="ventas"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      {/* Sección de productos destacados */}
      {/* <ProductosHome /> */}
    </Container>
  );
};

export default HomeVendedor;