import Link from 'next/link';
const NavigationBar = () => (
    <ul>
        <li>
            <Link href="/" prefetch={false}>
             <a>
              Ir para home
             </a>
            </Link>
            
        </li>
        <li>
            <Link href="/posts/1" prefetch={true}>
             <a>
              Ir para posts
             </a>
            </Link>
        </li>
    </ul>
)

export default NavigationBar;