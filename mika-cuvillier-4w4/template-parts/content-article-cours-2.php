<?php
/**
 * Template part pour afficher un bloc article contenant l'info d'un cours
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme-4w4
 */

?>
	<?php global $tProp; ?>
	<article>
		<p><?php echo $tProp['sigle'] . " - " . $tProp['nbHeure']; ?></p>
		<a href="<?php echo get_permalink(); ?>"><?php echo $tProp['titre']; ?></a>
		<p>Session : <?php echo $tProp['session']; ?></p>
		<?php if ($tProp['type_de_cours'] != "Web")
		echo selectionne_svg($tProp['type_de_cours']);	
		$tProp['precedent'] = $tProp['type_de_cours']; ?>
	</article>
