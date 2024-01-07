type BlockProps = {
  value?: string;
  onClick?: () => void;
};

const Block = (props: BlockProps) => {
  return (
    <div
      className="border-2 h-20 w-20 border-black flex justify-center items-center text-2xl font-bold"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Block;
