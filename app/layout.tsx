import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata={title:'IONEs',description:'Wear Silence. Own the Moment.'};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang='en'>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
