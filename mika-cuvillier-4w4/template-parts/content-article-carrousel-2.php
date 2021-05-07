<?php
/**
 * Template part pour afficher un bloc article contenant l'info d'un cours
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme-4w4
 */

?>

<?php global $tProp ?>
	<article class='slide__conteneur'>
		<div class='slide'>
			<?php // theme_4w4_post_thumbnail('thumbnail'); ?>
			<?php the_post_thumbnail('thumbnail'); ?>
			<div class='slide__info'>
				<p><?php echo $tProp['sigle'] . " - " . $tProp['nbHeure']; ?></p>
				<a href="<?php echo get_permalink(); ?>"><?php echo $tProp['titre']; ?></a>
				<p>Session : <?php echo $tProp['session']; ?></p>
			</div>
		</div>	
	</article>

			
