<?php

switch($_POST['info'])
{
    case 'cp1':
		?>
		<p>Once when I was very young, I ate a bug and it ate me.</p>
		<?php
	break;
	case 'cp2':
		?>
		<h3>Buy our product now!</h3>
		<p>It is tasty. Nothing like a bug tastes.</p>
		<?php
	break;
	case 'cp3':
		?>
		<h1>FREE SHIPPING!</h1>
		<p>We will happily send nothing for free.</p>
		<?php
	break;
	default:
		echo "FAIL!";
	break;
}

?>