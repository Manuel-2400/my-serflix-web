import { AppBar, Box, Divider, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material"
import { useState } from "react";
import Container from "../../components/Container";
import { Footer, Sidebar, Topbar } from "./components";



interface Props {
    children: React.ReactNode;
    colorInvert?: boolean;
    bgcolor?: string;
}
export const Main = ({
    children,
    colorInvert = false,
    bgcolor = 'transparent',
}: Props) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = (): void => {
        setOpenSidebar(true);
    };

    const handleSidebarClose = (): void => {
        setOpenSidebar(false);
    };

    const open = isMd ? false : openSidebar;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38,
    });

    return (
        <>
            <Box>
                <AppBar
                    position={'sticky'}
                    sx={{
                        top: 0,
                        backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
                    }}
                    elevation={trigger ? 1 : 0}
                >
                    <Container paddingY={1}>
                        <Topbar
                            onSidebarOpen={handleSidebarOpen}
                            colorInvert={trigger ? false : colorInvert}
                        />
                    </Container>
                </AppBar>
                <Sidebar
                    onClose={handleSidebarClose}
                    open={open}
                    variant="temporary"
                />

                <main>
                    {children}
                    <Divider />
                </main>
                <Container paddingY={4}>
                    <Footer />
                </Container>
            </Box>
        </>
    )
}