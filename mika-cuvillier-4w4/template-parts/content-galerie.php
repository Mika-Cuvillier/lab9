<?php
/**
 * Template part pour afficher les blocs de front-page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme4w4ed
 */
?>
 
<article class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <?php the_post_thumbnail('thumbnail' ); ?>
    </div>
    <div class="flip-card-back">
      <h1><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h1> 
    </div>
  </div>
</article>
