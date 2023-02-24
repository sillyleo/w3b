export default function Spinner(props) {
    return (

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"

             {...props}
        >
            <animateTransform attributeName="transform"
                              type="rotate"
                              from="0 0 0" to="360 0 0"
                              begin="0s" dur="1s"
                              repeatCount="indefinite"
            />

            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.6667 8C12.6667 5.42267 10.5773 3.33333 8 3.33333V2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8H3.33333C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8Z"
                  fill="currentColor"/>
        </svg>


    );
}