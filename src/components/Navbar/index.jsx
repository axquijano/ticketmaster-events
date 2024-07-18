import { forwardRef, useImperativeHandle, useState } from 'react';

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');


    useImperativeHandle(ref, () => ({
        search,
        setSearch,

    }));
    function handleInputChange(evt) {

        setSearch(evt.target.value);
    }

    const handleInputKeyDown = (evt) => {
        if (evt.key === "Enter") {
            onSearch(search);
        }
    }

    return (
        <div ref={ref} style={{
            marginBottom: '14px',
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex'}}>
                <p style={{ fontSize: '24px', fontWeight: 'bold'}}>Mi boletera</p>
            </div>
            <div style={{ felx: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <input
                    placeholder="Busca tu evento favorito"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: '16px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border : 'none',
                        width: '200px',
                    }}
                />
            </div>


        </div>
    );
});

Navbar.displayName = "Navbar";

export default Navbar; 