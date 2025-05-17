'use client'
import * as React from 'react';
import { Box, TextField } from '@mui/material';


export function Header() {
  return (
    <header className="flex items-center gap-12 p-4 border-1 text-white">
      <div className="items-center **:text-3xl flex gap-4 "><h1>VIMUX </h1><p>•</p><p className="text-2xl">Carlos, e ela...</p></div>
      <nav>
        <ul className="flex space-x-4">
          <li className="flex items-center gap-6">
            <div className="cursor-pointer px-4 hover:bg-amber-300 hover:[-webkit-text-stroke:1px_black] hover:text-white">Nos</div>
            <div className="cursor-pointer px-4 hover:bg-amber-300 hover:[-webkit-text-stroke:1px_black] hover:text-white">Ela</div>
            <div className="cursor-pointer px-4 hover:bg-amber-300 hover:[-webkit-text-stroke:1px_black] hover:text-white">Eu</div>
          </li>
          <li>
            <div className="flex space-x-4">
              <Box sx={{ paddingX: 4, maxWidth: '100%' }}>
                <TextField size="small" sx={{


                  '& .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fff', // força branco quando focado
                  },
                  '& .MuiOutlinedInput-root': {
                    color: '#fff', // texto digitado
                    '& fieldset': {
                      borderColor: '#fff',
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff',
                    },
                  },
                  '& .MuiInputAdornment-root': {
                    color: '#fff', // ícone "O"
                  },
                }} fullWidth label="Pesquisar..." id="fullWidth" />
              </Box>

            </div>
          </li>
          <li>

          </li>
        </ul>
      </nav>
    </header >
  );
}	