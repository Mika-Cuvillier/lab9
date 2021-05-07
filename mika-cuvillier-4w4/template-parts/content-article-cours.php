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

	<?php if ($tProp['precedent'] != $tProp['type_de_cours'] && $tProp['precedent'] != "XXXXXX") : ?>	
		<h2><?php echo $tProp['type_de_cours']; ?></h2>	
		<section class="type-cours <?php echo (preg_replace('/\s+|\//', '', $tProp['type_de_cours'])); ?>">	
		<?php $tProp['precedent'] = $tProp['type_de_cours']; ?>
	<?php endif ?>
	<article>
		<p><?php echo $tProp['sigle'] . " - " . $tProp['nbHeure']; ?></p>
		<a href="<?php echo get_permalink(); ?>"><?php echo $tProp['titre']; ?></a>
		<p>Session : <?php echo $tProp['session']; ?></p>
		<?php if ($tProp['type_de_cours'] != "Web")
		echo selectionne_svg($tProp['type_de_cours']);	
		$tProp['precedent'] = $tProp['type_de_cours']; ?>
	</article>

	<?php if ($tProp['precedent'] != $tProp['type_de_cours']) : ?>
	</section>
	<?php endif ?>	
