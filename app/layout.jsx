import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader/>
        {children}
      </body>
    </html>
  );
}


// this code in here -- the layout file in the root directory has access to the whole app
// these layout files are also scoped to the folders they are dealing with 
// the layout that has been laid out in the layout file will remain constant througut the app
