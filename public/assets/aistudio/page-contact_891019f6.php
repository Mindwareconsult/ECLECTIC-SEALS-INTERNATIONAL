<?php
/**
 * Template Name: Contact Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

$phone_1     = eclectic_seals_option( 'eclectic_seals_phone_1', '08027997172' );
$phone_2     = eclectic_seals_option( 'eclectic_seals_phone_2', '081600422514' );
$email       = eclectic_seals_option( 'eclectic_seals_email', 'eclecticseals@gmail.com' );
$address     = eclectic_seals_option( 'eclectic_seals_address', '11 Mungo Park Close, Asokoro, Abuja, Nigeria' );
$phone_1_tel = preg_replace( '/[^0-9+]/', '', '+234' . ltrim( $phone_1, '0' ) );
$submitted   = isset( $_GET['contact'] ) ? sanitize_text_field( wp_unslash( $_GET['contact'] ) ) : '';

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_contact.jpg',
		'breadcrumb' => 'Contact Us',
		'eyebrow'    => 'Get In Touch',
		'title'      => 'Let&rsquo;s Build Something Exceptional Together',
		'lead'       => "Whether you need expert advice, a project quotation, or more information about our services, we&rsquo;d love to hear from you.",
		'buttons'    => array(
			array( 'label' => 'Request Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Call Now', 'url' => 'tel:' . $phone_1_tel, 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container"><div class="grid-4 stagger">
  <div class="card reveal text-center" style="--i:0"><div class="icon" style="margin:0 auto 18px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6"/></svg></div><h3 style="font-size:17px;">Office Address</h3><p style="margin:0;"><?php echo wp_kses_post( $address ); ?></p></div>
  <div class="card reveal text-center" style="--i:1"><div class="icon" style="margin:0 auto 18px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.7 3.1a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2.1.6 3.1.7a2 2 0 0 1 1.6 2z"/></svg></div><h3 style="font-size:17px;">Phone</h3><p style="margin:0;"><?php echo esc_html( $phone_1 ); ?><br><?php echo esc_html( $phone_2 ); ?></p></div>
  <div class="card reveal text-center" style="--i:2"><div class="icon" style="margin:0 auto 18px;"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10 9 9.5 7.7 9.3 7.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg></div><h3 style="font-size:17px;">WhatsApp</h3><p style="margin:0;"><?php echo esc_html( $phone_1 ); ?></p></div>
  <div class="card reveal text-center" style="--i:3"><div class="icon" style="margin:0 auto 18px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div><h3 style="font-size:17px;">Working Hours</h3><p style="margin:0;"><?php echo wp_kses_post( eclectic_seals_option( 'eclectic_seals_hours', 'Mon &ndash; Fri: 8am &ndash; 5pm<br>Sat: 9am &ndash; 2pm<br>Sun: Closed' ) ); ?></p></div>
</div></div></section>

<section class="section section--light"><div class="container split">
    <div class="reveal-left">
      <div class="form-card">
        <h2 style="font-size:26px;">Send Us A Message</h2>
        <form id="contact-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" novalidate>
          <input type="hidden" name="action" value="eclectic_seals_contact">
          <?php wp_nonce_field( 'eclectic_seals_contact_submit', 'eclectic_seals_contact_nonce' ); ?>
          <input type="text" name="website" class="hp-field" style="position:absolute;left:-9999px;" tabindex="-1" autocomplete="off" aria-hidden="true">

          <?php if ( 'success' === $submitted ) : ?>
          <div class="form-success" style="display:flex; align-items:center; gap:10px; margin-bottom:18px; color:var(--success); font-weight:600;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg> Thank you &mdash; your message has been sent.</div>
          <?php elseif ( 'error' === $submitted ) : ?>
          <div class="form-success" style="display:flex; align-items:center; gap:10px; margin-bottom:18px; color:#c0392b; font-weight:600;">Please check your details and try again.</div>
          <?php endif; ?>

          <div class="row-2">
            <div class="field"><label for="c-name">Full Name *</label><input type="text" id="c-name" name="name" required><span class="err-msg">Please enter your name.</span></div>
            <div class="field"><label for="c-email">Email *</label><input type="email" id="c-email" name="email" required><span class="err-msg">Please enter a valid email.</span></div>
          </div>
          <div class="row-2">
            <div class="field"><label for="c-phone">Phone Number *</label><input type="tel" id="c-phone" name="phone" required><span class="err-msg">Please enter your phone number.</span></div>
            <div class="field"><label for="c-service">Service Required</label>
              <select id="c-service" name="service">
                <option>Interior Design</option><option>Interior Finishing</option><option>Furnishing</option><option>Renovation</option><option>Landscaping</option><option>Construction Supplies</option><option>Building &amp; Construction</option><option>Paint Manufacturing</option><option>Property Management</option>
              </select>
            </div>
          </div>
          <div class="field"><label for="c-subject">Subject *</label><input type="text" id="c-subject" name="subject" required><span class="err-msg">Please enter a subject.</span></div>
          <div class="field"><label for="c-message">Message *</label><textarea id="c-message" name="message" required></textarea><span class="err-msg">Please enter your message.</span></div>
          <div class="field"><label>Preferred Contact Method</label>
            <div class="checkbox-row">
              <label><input type="checkbox" name="pref[]" value="Call"> Call</label>
              <label><input type="checkbox" name="pref[]" value="WhatsApp"> WhatsApp</label>
              <label><input type="checkbox" name="pref[]" value="Email"> Email</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
        </form>
      </div>
    </div>
    <div class="reveal-right">
      <div style="border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-soft); aspect-ratio:4/3.6; margin-bottom:24px;">
        <iframe title="<?php bloginfo( 'name' ); ?> office location" src="https://www.google.com/maps?q=<?php echo rawurlencode( $address ); ?>&output=embed" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <a href="https://www.google.com/maps?q=<?php echo rawurlencode( $address ); ?>" target="_blank" rel="noopener" class="btn btn-outline-dark btn-sm">Get Directions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <h3 style="margin-top:32px; font-size:19px;">Follow Us</h3>
      <div class="footer-social" style="margin-top:12px;">
        <?php $facebook = eclectic_seals_option( 'eclectic_seals_facebook', 'https://www.facebook.com/share/1JaoMTg6S8/' ); ?>
        <?php if ( $facebook ) : ?>
        <a href="<?php echo esc_url( $facebook ); ?>" target="_blank" rel="noopener" style="border-color:rgba(15,23,42,0.15); color:var(--navy);" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg></a>
        <?php endif; ?>
      </div>
    </div>
  </div></section>

<section class="section"><div class="container">
    <div class="cta-band" style="background:var(--charcoal);">
      <div class="eyebrow" style="justify-content:center;">Emergency Contact</div>
      <h2>Need Immediate Assistance?</h2>
      <div class="btn-group">
        <a href="tel:<?php echo esc_attr( $phone_1_tel ); ?>" class="btn btn-primary">Call Now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a href="https://wa.me/<?php echo esc_attr( preg_replace( '/[^0-9]/', '', '234' . ltrim( $phone_1, '0' ) ) ); ?>" class="btn btn-outline">WhatsApp</a>
        <a href="mailto:<?php echo esc_attr( $email ); ?>" class="btn btn-outline">Email</a>
      </div>
    </div>
  </div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Ready To Start Your Next Project?',
		'text'    => 'Request a quote or schedule a free consultation with our team.',
		'buttons' => array(
			array( 'label' => 'Request Quote', 'url' => home_url( '/request-quote/' ), 'style' => 'primary' ),
			array( 'label' => 'Schedule Consultation', 'url' => home_url( '/request-quote/' ), 'style' => 'outline' ),
		),
	)
);

get_footer();
