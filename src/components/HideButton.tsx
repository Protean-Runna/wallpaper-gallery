

interface HideButtonProps {
    isHidden: boolean;
    onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HideButton: React.FC<HideButtonProps> = ({isHidden, onToggle}) =>{
    
    return(
        <button className='bg-transparent p-2 opacity-5 hover:opacity-100' onClick={() => onToggle(!isHidden)}>
            <p className="text-zinc-100">{isHidden ? 'Show' : 'Hide'} Titles</p>

        </button>
    )
}