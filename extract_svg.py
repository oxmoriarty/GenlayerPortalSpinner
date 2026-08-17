import cv2
import numpy as np

# Load the image
img = cv2.imread('public/media_1786988276138.png', cv2.IMREAD_GRAYSCALE)

# Threshold to binary (assuming logo is distinct from background)
_, thresh = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY)

# if most of the image is white (background), invert it so contours find the logo
if np.sum(thresh == 255) > np.sum(thresh == 0):
    thresh = cv2.bitwise_not(thresh)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

svg_paths = []
for cnt in contours:
    # simplify the contour a bit
    epsilon = 0.005 * cv2.arcLength(cnt, True)
    approx = cv2.approxPolyDP(cnt, epsilon, True)
    
    if len(approx) > 2:
        path = "M " + " L ".join([f"{pt[0][0]},{pt[0][1]}" for pt in approx]) + " Z"
        svg_paths.append(path)

print(f"Found {len(svg_paths)} paths")
with open('logo.svg', 'w') as f:
    f.write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {img.shape[1]} {img.shape[0]}">\n')
    for p in svg_paths:
        f.write(f'  <path d="{p}" fill="black" />\n')
    f.write('</svg>\n')
print("Saved to logo.svg")
