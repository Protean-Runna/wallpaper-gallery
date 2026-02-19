

interface HideButtonProps {
    isHidden: boolean;
    onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HideButton: React.FC<HideButtonProps> = ({isHidden, onToggle}) =>{
    
    return(
        <button className='bg-zinc-700 p-2 opacity-2 hover:opacity-100' onClick={() => onToggle(!isHidden)}>
            <p>{isHidden ? 'Show' : 'Hide'} Titles</p>

        </button>
    )
}