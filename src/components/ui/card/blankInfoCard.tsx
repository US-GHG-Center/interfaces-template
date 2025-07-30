import { Box, Typography } from '@mui/material';

interface BlankInfoCardProps {
  illustration?: string;
  message?: string;
}

export function BlankInfoCard({ illustration, message }: BlankInfoCardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
        color: 'text.secondary',
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      {illustration && (
        <Box sx={{ maxWidth: '200px', mb: 2 }}>
          <img
            src={illustration}
            alt="No SAMs selected"
            style={{ width: '200px', height: '100%', padding: '8rem 4rem 0rem 4rem' }}
          />
        </Box>
      )}
      <Typography variant="body1" sx={{ marginBottom: 4, fontSize: '0.9rem' }}>
        {message}
      </Typography>
    </Box>
  );
}
