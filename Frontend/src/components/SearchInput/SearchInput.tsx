interface SearchInputProps {
  type: string;
  className: string;
  placeHolder: string;
  ariaLabel: string;
}

const SearchInput = ({
  type,
  className,
  placeHolder,
  ariaLabel,
}: SearchInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={className}
      aria-label={ariaLabel}
    />
  );
};

export default SearchInput;
