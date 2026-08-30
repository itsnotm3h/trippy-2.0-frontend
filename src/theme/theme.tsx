import { createTheme } from '@mui/material/styles';


const baseTheme = createTheme({
    palette: {
        primary: { main: '#007bff' },
        secondary: { main: '#6c757d' },
        error: { main: '#dc3545' },
        warning: { main: '#ffc107' },
        info: { main: '#0dcaf0' },
        success: { main: '#28a745' },
    }
})

const theme = createTheme(baseTheme, {
    typography: {
        fontFamily: '"Source Code Pro", monospace',
        fontSize: 16,
        fontWeightRegular: 400,
        h1: {
            fontSize: '2rem',       // 32px
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 900,
        },
        h2: {
            fontSize: '1.5rem',     // 24px
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 900,
        },
        h3: {
            fontSize: '1.25rem',    // 20px
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 900,
        },
        h4: {
            fontSize: '1rem',       // 16px
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 900,
        },
        h5: {
            fontSize: '0.875rem',   // 14px
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 900,
        },
        h6: {
            fontSize: '0.75rem',    // 12px
            fontFamily: '"Nunito", sans-serif',
            fontWeight: 900,
        },
        body1: {
            fontFamily: '"Nunito", sans-serif',
            fontSize: '1rem',       // 16px
        },
        body2: {
            fontFamily: '"Nunito", sans-serif',
            fontSize: '0.875rem',   // 14px
        }
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',   // match your bg color
                    boxShadow: 'none',
                },
            },
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    color: 'var(--text)',
                    fontWeight: 700,
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: '"Source Code Pro", monospace',
                    padding: "2px",
                    borderColor: "var(--form-border-color)",
                    borderRadius: "var(--form-border-radius)",
                    backgroundColor: "var(--form-background-color)",
                    fontSize: '0.9rem',
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: '1rem',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: 'var(--font-size-sm)',
                    borderRadius: '19px',
                    backgroundColor: 'var(--color-black)',
                    textTransform: 'none',
                    fontWeight: 400,
                    transition: {
                        backgroundColor: "var(--button-transition)"
                    },
                    transform: "var(--button-transition)",
                    '&:hover': {
                        backgroundColor: '#e98c00',
                    }
                },
            },
        },
    },
});

export default theme;