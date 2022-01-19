interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const MountainsIcon = (props: Props) => {
  const { width = "30", height = "30", fill = "none" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6667 3.33333V26.6667H3.33333V3.33333H26.6667ZM26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM18.5667 14.7667L13.5667 21.2167L10 16.9L5 23.3333H25L18.5667 14.7667Z"
        fill="#F7F7F7"
      />
    </svg>
  );
};

export default MountainsIcon;
