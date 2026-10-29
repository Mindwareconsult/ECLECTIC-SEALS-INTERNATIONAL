<?php
/**
 * Template Name: Request a Quote Page
 * Template Post Type: page
 *
 * @package Eclectic_Seals
 */

get_header();

$phone_1_tel = preg_replace( '/[^0-9+]/', '', '+234' . ltrim( eclectic_seals_option( 'eclectic_seals_phone_1', '08027997172' ), '0' ) );
$whatsapp    = preg_replace( '/[^0-9]/', '', '234' . ltrim( eclectic_seals_option( 'eclectic_seals_phone_1', '08027997172' ), '0' ) );
$submitted   = isset( $_GET['quote'] ) ? sanitize_text_field( wp_unslash( $_GET['quote'] ) ) : '';

get_template_part(
	'template-parts/hero/page-hero',
	null,
	array(
		'image'      => 'hero_quote.jpg',
		'breadcrumb' => 'Request a Quote',
		'eyebrow'    => 'Get Started',
		'title'      => 'Let&rsquo;s Discuss Your Project',
		'lead'       => "Whether you&rsquo;re building from scratch, renovating an existing property, redesigning interiors, or managing investments, we&rsquo;re ready to help bring your vision to life.",
		'buttons'    => array(
			array( 'label' => 'Call Now', 'url' => 'tel:' . $phone_1_tel, 'style' => 'primary' ),
			array( 'label' => 'Chat on WhatsApp', 'url' => 'https://wa.me/' . $whatsapp, 'style' => 'outline' ),
		),
	)
);
?>

<section class="section" id="main"><div class="container">
    <div class="form-card" style="max-width:840px; margin:0 auto;">

      <?php if ( 'success' === $submitted ) : ?>
      <div id="quote-success" style="text-align:center; padding:20px 0;">
        <div class="confirm-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg></div>
        <h3 style="font-size:24px;">Your Request Has Been Submitted</h3>
        <p style="color:#5b6370;">Thank you for reaching out. A member of our team will contact you within one business day to schedule your consultation.</p>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-outline-dark" style="margin-top:12px;">Return Home</a>
      </div>
      <?php else : ?>

      <div class="steps-indicator">
        <div class="step-dot active"><div class="circle">1</div><div class="lbl">Your Info</div></div>
        <div class="step-dot"><div class="circle">2</div><div class="lbl">Project</div></div>
        <div class="step-dot"><div class="circle">3</div><div class="lbl">Details</div></div>
        <div class="step-dot"><div class="circle">4</div><div class="lbl">Review</div></div>
      </div>

      <?php if ( 'error' === $submitted ) : ?>
      <div class="form-success" style="display:flex; align-items:center; gap:10px; margin-bottom:18px; color:#c0392b; font-weight:600;">Please check your details and try again.</div>
      <?php endif; ?>

      <form id="quote-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" enctype="multipart/form-data" novalidate>
        <input type="hidden" name="action" value="eclectic_seals_quote">
        <?php wp_nonce_field( 'eclectic_seals_quote_submit', 'eclectic_seals_quote_nonce' ); ?>
        <input type="text" name="website" class="hp-field" style="position:absolute;left:-9999px;" tabindex="-1" autocomplete="off" aria-hidden="true">

        <div class="form-step active">
          <h3 style="font-size:22px;">Personal Information</h3>
          <div class="row-2">
            <div class="field"><label for="q-name">Full Name *</label><input type="text" id="q-name" name="name" required><span class="err-msg">Please enter your full name.</span></div>
            <div class="field"><label for="q-email">Email Address *</label><input type="email" id="q-email" name="email" required><span class="err-msg">Please enter a valid email.</span></div>
          </div>
          <div class="row-2">
            <div class="field"><label for="q-phone">Phone Number *</label><input type="tel" id="q-phone" name="phone" required><span class="err-msg">Please enter your phone number.</span></div>
            <div class="field"><label for="q-company">Company Name (optional)</label><input type="text" id="q-company" name="company"></div>
          </div>
          <div class="row-2">
            <div class="field"><label for="q-city">City *</label><input type="text" id="q-city" name="city" required><span class="err-msg">Please enter your city.</span></div>
            <div class="field"><label for="q-state">State *</label><input type="text" id="q-state" name="state" required><span class="err-msg">Please enter your state.</span></div>
          </div>
          <div class="btn-group" style="justify-content:flex-end;"><button type="button" class="btn btn-primary" data-next>Next Step <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
        </div>

        <div class="form-step">
          <h3 style="font-size:22px;">Project Information</h3>
          <div class="field"><label for="q-type">Project Type *</label>
            <select id="q-type" name="service" required>
              <option value="">Select a project type</option>
              <option>Residential</option><option>Commercial</option><option>Office</option><option>Hospitality</option><option>Retail</option><option>Industrial</option><option>Property Management</option><option>Construction Supplies</option><option>Interior Design</option><option>Renovation</option><option>Landscaping</option><option>Paint Supply</option>
            </select><span class="err-msg">Please select a project type.</span>
          </div>
          <div class="row-2">
            <div class="field"><label for="q-budget">Budget Range *</label>
              <select id="q-budget" name="budget" required>
                <option value="">Select a budget range</option>
                <option>Under &#8358;5,000,000</option><option>&#8358;5,000,000 &ndash; &#8358;20,000,000</option><option>&#8358;20,000,000 &ndash; &#8358;50,000,000</option><option>&#8358;50,000,000 &ndash; &#8358;150,000,000</option><option>Above &#8358;150,000,000</option>
              </select><span class="err-msg">Please select a budget range.</span>
            </div>
            <div class="field"><label for="q-timeline">Timeline *</label>
              <select id="q-timeline" name="timeline" required>
                <option value="">Select a timeline</option>
                <option>Immediately</option><option>Within 1 month</option><option>1&ndash;3 months</option><option>3&ndash;6 months</option><option>Flexible</option>
              </select><span class="err-msg">Please select a timeline.</span>
            </div>
          </div>
          <div class="field"><label for="q-address">Project Address</label><input type="text" id="q-address" name="location" placeholder="Where is the project located?"></div>
          <div class="btn-group" style="justify-content:space-between;"><button type="button" class="btn btn-outline-dark" data-prev>Back</button><button type="button" class="btn btn-primary" data-next>Next Step <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
        </div>

        <div class="form-step">
          <h3 style="font-size:22px;">Describe Your Project</h3>
          <div class="field"><label for="q-details">Project Details *</label><textarea id="q-details" name="description" required placeholder="Tell us about your project, goals and any specific requirements."></textarea><span class="err-msg">Please describe your project.</span></div>
          <div class="row-2">
            <div class="field"><label for="q-drawing">Upload Drawings (optional)</label><input type="file" id="q-drawing" name="drawings"></div>
            <div class="field"><label for="q-inspo">Upload Inspiration Images (optional)</label><input type="file" id="q-inspo" name="inspiration"></div>
          </div>
          <div class="field"><label for="q-date">Preferred Consultation Date</label><input type="date" id="q-date" name="consult_date"></div>
          <div class="field"><label>Preferred Communication Method</label>
            <div class="checkbox-row">
              <label><input type="checkbox" name="contact_pref[]" value="Call"> Call</label>
              <label><input type="checkbox" name="contact_pref[]" value="WhatsApp"> WhatsApp</label>
              <label><input type="checkbox" name="contact_pref[]" value="Email"> Email</label>
            </div>
          </div>
          <div class="btn-group" style="justify-content:space-between;"><button type="button" class="btn btn-outline-dark" data-prev>Back</button><button type="button" class="btn btn-primary" data-next>Next Step <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
        </div>

        <div class="form-step">
          <h3 style="font-size:22px;">Review &amp; Submit</h3>
          <div id="quote-summary" style="background:var(--bg); border-radius:16px; padding:24px; font-size:14.5px; line-height:2;"></div>
          <div class="btn-group" style="justify-content:space-between; margin-top:24px;"><button type="button" class="btn btn-outline-dark" data-prev>Back</button><button type="submit" class="btn btn-primary">Submit Request <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg></button></div>
        </div>
      </form>
      <?php endif; ?>
    </div>
  </div></section>

<section class="section section--light"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">Why Request A Quote</div><h2>What You Get From A Consultation</h2></div>
  <div class="grid-3 stagger">
    <?php
    $benefits = array(
			array( 'icon' => 'M20 6 9 17l-5-5', 'title' => 'Free Initial Consultation', 'text' => 'No cost or obligation to discuss your project with our team.' ),
			array( 'icon' => 'M9 12h6M12 9v6', 'circle' => true, 'title' => 'Transparent Pricing', 'text' => 'An itemised quotation with no hidden costs.' ),
			array( 'icon' => 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', 'title' => 'Professional Advice', 'text' => 'Guidance from architects, engineers and designers.' ),
			array( 'icon' => 'M4 4h16v16H4zM4 9h16M9 9v11', 'title' => 'Tailored Solutions', 'text' => 'Recommendations shaped around your brief and budget.' ),
			array( 'icon' => 'M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z', 'title' => 'Experienced Team', 'text' => 'Work delivered by a team that has done this before.' ),
			array( 'icon' => 'M12 7v5l3 3', 'circle' => true, 'title' => 'Timely Response', 'text' => 'We respond to every enquiry within one business day.' ),
		);
		foreach ( $benefits as $i => $item ) :
		?>
    <div class="card reveal" style="--i:<?php echo (int) $i; ?>"><div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><?php if ( ! empty( $item['circle'] ) ) : ?><circle cx="12" cy="12" r="9"/><?php endif; ?><path d="<?php echo esc_attr( $item['icon'] ); ?>"/></svg></div><h3 style="font-size:17px;"><?php echo esc_html( $item['title'] ); ?></h3><p style="margin:0;"><?php echo esc_html( $item['text'] ); ?></p></div>
    <?php endforeach; ?>
  </div>
</div></section>

<section class="section section--dark"><div class="container">
  <div class="section-head center"><div class="eyebrow" style="justify-content:center;">What Happens Next</div><h2>Expected Process</h2></div>
  <div class="process-track">
    <?php foreach ( array( 'Request Submitted', 'Review', 'Consultation', 'Site Inspection', 'Proposal', 'Quotation', 'Approval', 'Project Kickoff' ) as $i => $step ) : ?>
    <div class="process-step reveal-scale" style="--i:<?php echo (int) ( $i + 1 ); ?>"><div class="seal"><span><?php echo esc_html( sprintf( '%02d', $i + 1 ) ); ?></span></div><h4 style="font-size:14.5px;"><?php echo esc_html( $step ); ?></h4></div>
    <?php endforeach; ?>
  </div>
</div></section>

<?php
get_template_part(
	'template-parts/cta/cta-quote',
	null,
	array(
		'heading' => 'Your Dream Project Starts With A Conversation',
		'text'    => "Prefer to talk it through first? We're one call or message away.",
		'buttons' => array(
			array( 'label' => 'Call Us', 'url' => 'tel:' . $phone_1_tel, 'style' => 'primary' ),
			array( 'label' => 'WhatsApp', 'url' => 'https://wa.me/' . $whatsapp, 'style' => 'outline' ),
		),
	)
);

get_footer();
