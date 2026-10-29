<?php
/**
 * Template Name: Privacy Policy Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_contact.jpg',
		'min_height' => '44vh',
		'breadcrumb' => 'Privacy Policy',
		'title'      => 'Privacy Policy',
	)
);
?>

<section class="section" style="padding-top:60px;"><div class="container" style="max-width:860px;">

  <?php if ( have_posts() ) : the_post(); ?>
    <?php if ( get_the_content() ) : ?>
      <div class="entry-content"><?php the_content(); ?></div>
    <?php endif; ?>
    <?php rewind_posts(); ?>
  <?php endif; ?>

  <?php
  $sections = array(
		array( 'Information We Collect', 'We collect information you provide directly, including your name, phone number, email address, and project details submitted through our contact form, quotation request form, or newsletter sign-up.' ),
		array( 'Cookies', 'Our website may use cookies to remember your preferences, such as dark mode settings, and to understand how visitors use our site. You can disable cookies through your browser settings.' ),
		array( 'Contact Forms', 'Information submitted through our contact and quotation forms is used solely to respond to your enquiry and, where relevant, prepare a project quotation.' ),
		array( 'How We Use Your Information', 'We use your information to respond to enquiries, provide quotations, deliver services you have requested, and, if you opt in, send newsletter updates about our work.' ),
		array( 'Data Protection', 'We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, or disclosure.' ),
		array( 'Third-Party Services', 'We may use third-party services such as Google Maps and email delivery providers to operate our website. These providers process data according to their own privacy policies.' ),
		array( 'Email Subscriptions', 'If you subscribe to our newsletter, you can unsubscribe at any time using the link provided in any email we send.' ),
		array( 'Analytics', 'We may use analytics tools to understand website traffic and improve our content. This data is aggregated and does not personally identify you.' ),
		array( 'Your Rights', 'You may request access to, correction of, or deletion of your personal information by contacting us at ' . eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' ) . '.' ),
		array( 'Changes to This Policy', 'We may update this privacy policy from time to time. Continued use of our website constitutes acceptance of the revised policy.' ),
	);
	foreach ( $sections as $section ) :
	?>
  <div class="reveal" style="margin-bottom:36px;">
    <h3 style="font-size:22px;"><?php echo esc_html( $section[0] ); ?></h3>
    <p style="color:#5b6370;"><?php echo wp_kses_post( $section[1] ); ?></p>
  </div>
  <?php endforeach; ?>

  <p style="color:#5b6370;">For questions about this policy, contact us at <a href="mailto:<?php echo esc_attr( eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' ) ); ?>" style="color:var(--navy); font-weight:600;"><?php echo esc_html( eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' ) ); ?></a>.</p>
</div></section>

<?php get_footer(); ?>
