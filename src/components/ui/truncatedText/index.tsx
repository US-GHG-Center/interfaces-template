import { useState } from 'react';
import { IconButton, Tooltip, Box, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function TruncatedCopyText({ text, maxLength = 20 }: { text: string; maxLength?: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: `${maxLength * 1}ch` }}>
      <Tooltip title={text}>
        <Box
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent)',
            mr: 1,
          }}
        >
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Box>
      </Tooltip>
      <Tooltip title={copied ? 'Copied' : 'Copy'}>
        <IconButton size="small" onClick={handleCopy}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
