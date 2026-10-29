<?php
/**
 * Fallback template — WordPress requires index.php to exist. Used for any
 * request that doesn't match a more specific template (e.g. category or
 * tag archives, since this theme doesn't ship dedicated archive-*.php
 * files for standard taxonomies).
 *
 * @package Eclectic_Seals
 */

get_header();
?>
<section class="section" id="main"><div class="container">
  <?php if ( have_posts() ) : ?>
    <?php if ( is_archive() || is_search() ) : ?>
    <div class="section-head center">
      <h1><?php the_archive_title(); ?></h1>
      <?php the_archive_description( '<p class="lead">', '</p>' ); ?>
    </div>
    <?php endif; ?>

    <div class="blog-feed">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'template-parts/blog/post-card' ); ?>
      <?php endwhile; ?>
    </div>

    <?php the_posts_pagination( array( 'mid_size' => 1 ) ); ?>
  <?php else : ?>
    <div class="section-head center">
      <h1>Nothing Found</h1>
      <p class="lead">Try adjusting your search, or head back to the homepage.</p>
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">Return Home</a>
    </div>
  <?php endif; ?>
</div></section>
<?php get_footer(); ?>
