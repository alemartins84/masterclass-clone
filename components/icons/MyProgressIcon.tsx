// components/icons/MyProgressIcon.tsx

const MyProgressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5a4.762 4.762 0 1 0 0 9.524A4.762 4.762 0 0 0 12 2.5ZM9.143 7.262a2.857 2.857 0 1 1 5.714 0 2.857 2.857 0 0 1-5.714 0Z" fill="currentColor"></path><path d="M5.333 21.548c0-1.8.705-2.92 1.801-3.639 1.159-.758 2.85-1.123 4.866-1.123 2.017 0 3.708.365 4.866 1.123 1.096.718 1.8 1.84 1.8 3.639a.952.952 0 1 0 1.906 0c0-2.409-1.002-4.145-2.663-5.232-1.6-1.047-3.717-1.435-5.909-1.435-2.191 0-4.31.388-5.909 1.435-1.661 1.087-2.662 2.823-2.662 5.232a.952.952 0 1 0 1.904 0Z" fill="currentColor"></path>
    </svg>
  );
}

export default MyProgressIcon;
