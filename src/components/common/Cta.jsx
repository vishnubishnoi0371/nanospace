const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 !flex flex-nowrap text_shadow items-center gap-2 text-lg common-transition hover:bg-blue-600 text-white rounded-full font-medium py-1.5 px-4 ${className}`}
      type={type}
      {...props}
    >
      {children} 
    </button>
  );
};

export default Button;
