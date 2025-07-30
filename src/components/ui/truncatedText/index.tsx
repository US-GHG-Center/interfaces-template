import { useState, useEffect } from 'react';
import { IconButton, Tooltip, Box, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function TruncatedCopyText({ text, maxLength = 20 }: { text: string; maxLength?: number }) {
  const [copied, setCopied] = useState(false);
  const [truncated, setTruncated] = useState(false);

  useEffect(() => {
    setTruncated(text.length > maxLength);
  }, [text, maxLength]);

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
            maskImage: truncated ? 'linear-gradient(to right, black 70%, transparent)' : 'none',
            WebkitMaskImage: truncated ? 'linear-gradient(to right, black 70%, transparent)' : 'none',
            mr: 1,
          }}
        >
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Box>
      </Tooltip>
      <Tooltip title={copied ? 'Copied' : 'Copy'}>
        <IconButton
          size="small"
          onClick={handleCopy}
        >
          <ContentCopyIcon
            fontSize="small"
            sx={{
              width: '18px',
              height: '18px',
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
