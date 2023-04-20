import '../styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gradient-to-r from-gray-900 to-gray-600">
                {children}
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Huseyin Gulcu - Linktree',
    description: 'Welcome to my linktree',
};
