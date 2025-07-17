export default function Dashboard() {
   // In Dashboard.tsx temporär hinzufügen:
   console.log('A11y Checks enabled:', import.meta.env.VITE_A11Y_CHECKS);
   console.log('Is Dev:', import.meta.env.DEV);
   return (
      <div>
         <h1>DASHBOARD</h1>

         {/* A11y Issue #1: Button ohne Text */}
         <button></button>

         {/* A11y Issue #2: Image ohne alt text */}
         <img src="test.jpg" />

         {/* A11y Issue #3: Input ohne Label */}
         <input type="text" placeholder="Email" />

         {/* A11y Issue #4: Link ohne Text */}
         <a href="#"></a>

         {/* A11y Issue #5: div mit onClick aber ohne Keyboard Handler */}
         <div onClick={() => console.log('clicked')}>Click me</div>
      </div>
   );
}
